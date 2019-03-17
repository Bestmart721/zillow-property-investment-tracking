import express from 'express';

//import controller file
import * as zillowController from '../controllers/zillow.server.controller';

// get an instance of express router
const router = express.Router();

//router.get('/properties/:id/get-deep-search-results', zillowController.getDeepSearchResults);
router.get('/properties/:id/get-updated-property-details', zillowController.getUpdatedPropertyDetails);
router.get('/properties/:id/get-deep-comps', zillowController.getDeepComps);
//router.get('/properties/:id/get-rate-summary', zillowController.getRateSummary);
//router.get('/properties/:id/get-monthly-payments', zillowController.getMonthlyPayments);
//router.get('/properties/:id/get-demographics', zillowController.getDemographics);
//router.get('/properties/:id/get-region-children', zillowController.getRegionChildren);
//router.get('/properties/:id/get-region-chart', zillowController.getRegionChart);
router.get('/properties/get-search-results/:query', zillowController.getSearchResults);
router.get('/properties/:id/get-zestimate', zillowController.getZestimate);
router.get('/properties/:id/get-chart', zillowController.getChart);
router.get('/properties/:id/get-comps', zillowController.getComps);

export default router;
