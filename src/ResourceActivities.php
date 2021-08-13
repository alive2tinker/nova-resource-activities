<?php

namespace Alive2tinker\ResourceActivities;

use Laravel\Nova\ResourceTool;

class ResourceActivities extends ResourceTool
{
    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return 'Resource Activities';
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'resource-activities';
    }
}
