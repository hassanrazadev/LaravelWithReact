<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FavouriteProduct extends BaseModel {
    use HasFactory;

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
    public function product() {
        return $this->belongsTo(Product::class);
    }
    // =========================== ORM END ========================= //
}
