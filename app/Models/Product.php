<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends BaseModel {
    use HasFactory;

    protected $fillable = [
        'user_id', 'category_id', 'title', 'image', 'price', 'description'
    ];

    // =========================== ORM START ========================= //
    /**
     * @return BelongsTo
     */
    public function user() {
        return $this->belongsTo(User::class);
    }

    /**
     * @return BelongsTo
     */
    public function category() {
        return $this->belongsTo(Category::class);
    }

    // =========================== ORM END ========================= //
}
