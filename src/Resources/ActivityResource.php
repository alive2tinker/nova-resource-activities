<?php

namespace Alive2tinker\ResourceActivities\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ActivityResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'description' => $this->description,
            'createdAt' => $this->created_at->format('Y-m-d h:i:s')
        ];
    }
}
