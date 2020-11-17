<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCategoryRequest;
use App\Models\Category;

class CategoryController extends BaseController {
    /**
     * @var Category
     */
    private $category;

    /**
     * CategoryController constructor.
     * @param  Category  $category
     */
    public function __construct(Category $category) {
        $this->category = $category;
    }

    public function create(CreateCategoryRequest $request) {
        $fields = $request->validated();
        $this->category->createOrUpdate($fields);
    }
}
