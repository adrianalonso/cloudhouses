<?php

namespace AppBundle\Controller;

use AppBundle\Services\GetChildren;
use eZ\Bundle\EzPublishCoreBundle\Controller;
use eZ\Publish\Core\MVC\Symfony\View\ContentView;
use Symfony\Component\HttpFoundation\Response;

class HouseController
{


    /**
     * @var GetChildren
     */
    private $getChildrenService;

    public function __construct(GetChildren $getChildrenService)
    {
        $this->getChildrenService = $getChildrenService;
    }

    public function houseAction(ContentView $view)
    {
        $children = $this->getChildrenService->getChildrens($view->getLocation()->id, 'esp-ES', 'house_member');
        $view->addParameters(['children' => $children]);

        return $view;
    }

}