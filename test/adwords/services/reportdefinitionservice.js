'use strict';
/**
 * Tests / Examples for ReportDefinition Service
 */
const AdwordsUser = require('../../../index').AdwordsUser;
const AdwordsConstants = require('../../../index').AdwordsConstants;

describe('ReportDefinitionService', function() {

    var config = require('./adwordsuser-config');
    if (!config) {
        return console.log('Adwords User not configured, skipping ReportDefinition Service tests');
    }

    var user = new AdwordsUser(config);

    it('should return a result with a list of definitions', function(done) {
        var reportDefinitionService = user.getService('ReportDefinitionService', config.version);
        reportDefinitionService.getReportFields({reportType: 'KEYWORDS_PERFORMANCE_REPORT'}, done);
    });

});
