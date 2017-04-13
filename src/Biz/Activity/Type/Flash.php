<?php

namespace Biz\Activity\Type;

use Biz\Activity\Config\Activity;
use AppBundle\Common\ArrayToolkit;
use Biz\Activity\Dao\FlashActivityDao;
use Biz\Activity\Service\ActivityService;
use Biz\Activity\Service\ActivityLearnLogService;

class Flash extends Activity
{
    public function isFinished($activityId)
    {
        $activity = $this->getActivityService()->getActivity($activityId);
        $flash = $this->getFlashActivityDao()->get($activity['mediaId']);

        $result = $this->getActivityLearnLogService()->sumMyLearnedTimeByActivityId($activityId);
        $result /= 60;

        return !empty($result) && $result >= $flash['finishDetail'];
    }

    protected function registerListeners()
    {
    }

    public function create($fields)
    {
        $flash = ArrayToolkit::parts($fields, array(
            'mediaId',
            'finishType',
            'finishDetail',
        ));

        $biz = $this->getBiz();
        $flash['createdUserId'] = $biz['user']['id'];

        $flash = $this->getFlashActivityDao()->create($flash);

        return $flash;
    }

    public function copy($activity, $config = array())
    {
        $biz = $this->getBiz();
        $flash = $this->getFlashActivityDao()->get($activity['mediaId']);
        $newFlash = array(
            'mediaId' => $flash['mediaId'],
            'finishType' => $flash['finishType'],
            'finishDetail' => $flash['finishDetail'],
            'createdUserId' => $biz['user']['id'],
        );

        return $this->getFlashActivityDao()->create($newFlash);
    }

    public function sync($sourceActivity, $activity)
    {
        $sourceFlash = $this->getFlashActivityDao()->get($sourceActivity['mediaId']);
        $flash = $this->getFlashActivityDao()->get($activity['mediaId']);
        $flash['mediaId'] = $sourceFlash['mediaId'];
        $flash['finishType'] = $sourceFlash['finishType'];
        $flash['finishDetail'] = $sourceFlash['finishDetail'];

        return $this->getFlashActivityDao()->update($flash['id'], $flash);
    }

    public function update($targetId, &$fields, $activity)
    {
        $updateFields = ArrayToolkit::parts($fields, array(
            'mediaId',
            'finishType',
            'finishDetail',
        ));

        return $this->getFlashActivityDao()->update($targetId, $updateFields);
    }

    public function delete($targetId)
    {
        return $this->getFlashActivityDao()->delete($targetId);
    }

    public function get($targetId)
    {
        $flashActivity = $this->getFlashActivityDao()->get($targetId);
        $audioActivity['file'] = $this->getUploadFileService()->getFullFile($flashActivity['mediaId']);

        return $audioActivity;
    }

    /**
     * @return FlashActivityDao
     */
    protected function getFlashActivityDao()
    {
        return $this->getBiz()->dao('Activity:FlashActivityDao');
    }

    /**
     * @return ActivityLearnLogService
     */
    protected function getActivityLearnLogService()
    {
        return $this->getBiz()->service('Activity:ActivityLearnLogService');
    }

    /**
     * @return ActivityService
     */
    protected function getActivityService()
    {
        return $this->getBiz()->service('Activity:ActivityService');
    }

    protected function getUploadFileService()
    {
        return $this->getBiz()->service('File:UploadFileService');
    }
}
