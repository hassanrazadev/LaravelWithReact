<?php

namespace App\Http\Controllers;

use App\Models\Product;

class ProductController extends BaseController {
    /**
     * @var Product
     */
    private $product;

    /**
     * ProductController constructor.
     * @param  Product  $product
     */
    public function __construct(Product $product) {
        $this->product = $product;
    }
}
