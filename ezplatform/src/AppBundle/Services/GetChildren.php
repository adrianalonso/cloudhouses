<?php


namespace AppBundle\Services;

use eZ\Publish\API\Repository\SearchService;
use eZ\Publish\API\Repository\Values\Content\Query\Criterion;
use eZ\Publish\Core\Repository\ContentService;

class GetChildren
{

    /**
     * @var SearchService
     */
    private $searchService;
    /**
     * @var ContentService
     */
    private $contentService;

    public function __construct(SearchService $searchService, ContentService $contentService)
    {
        $this->searchService = $searchService;
        $this->contentService = $contentService;
    }

    public function getChildrens($locationId, $languageCode= "esp-ES", $contentType = null)
    {

        $query = new \eZ\Publish\API\Repository\Values\Content\Query();
        $locationCriterion = new Criterion\ParentLocationId($locationId);
        $localeCriterion = new Criterion\LanguageCode($languageCode);

        $criterion =[$locationCriterion, $localeCriterion];

        if ($contentType) {
            $criterion[]=  new Criterion\ContentTypeIdentifier($contentType);

        }
        $query->filter = new Criterion\LogicalAnd($criterion);

        return $this->searchService->findContent($query);

    }
}