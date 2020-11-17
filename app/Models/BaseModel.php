<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
/**
 * BaseModel
 * @mixin Eloquent
 */
class BaseModel extends Model {
    use HasFactory;

    /**
     * @var array
     * $data variable for returning data in formatted way
     */
    protected $data = [
        'status' => false,
        'code' => 500,
        'message' => '',
        'data' => []
    ];

    /**
     * @param $date
     * @return string
     * get created_at as string
     */
    protected function getCreatedAtAttribute($date): string {
        return (string) $date;
    }

    /**
     * @param $date
     * @return string
     * get updated_at as string
     */
    protected function getUpdatedAtAttribute($date): string {
        return (string) $date;
    }

    /**
     * @return array
     * get current properties as array.
     */
    protected function format(): array {
        return $this->toArray();
    }

    public function createOrUpdate($fields, $id = null) {
        $model = $id ? $this::findOrFail($id) : $this::create($fields);

    }
}
