// contains local cucumber-js configuration entries:
const config = {
    paths: ['features/**/*.feature'],
    require: ['step_definations/**/*.js'],
    // Report: '--parallel 2 --format html:cucumber-report.html',
    // format: [
    //   'summary',
    //   'progress-bar',
    //   'json:tests/reports/cucumber_report.json',
    // ],
    // formatOptions: { snippetInterface: 'async-await' },
   
  };
module.exports = {
    default: config
  }