<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends BaseModel {
    use HasFactory;

    protected $fillable = [
        'user_id', 'parent_id', 'name', 'image'
    ];

    // =========================== ORM START ========================= //

    /**
     * @return BelongsTo
     */
    public function parent() {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    /**
     * @return HasMany
     */
    public function children() {
        return $this->hasMany(Category::class, 'parent_id');
    }

    /**
     * @return BelongsTo
     */
    public function user() {
        return $this->belongsTo(User::class);
    }

    /**
     * @return HasMany
     */
    public function products() {
        return $this->hasMany(Product::class);
    }
    // =========================== ORM END ========================= //
}
