Package.describe({
  summary: "jQuery Validation plug-in with additional validation methods",
  version: "1.0.0",
  git: ""
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.use('jquery', 'client');

  api.addFiles('core.js', 'client');
  api.addFiles('ajax.js', 'client');
  api.addFiles('delegate.js', 'client');

  api.addFiles('additional/accept.js', 'client');
  api.addFiles('additional/additional.js', 'client');
  api.addFiles('additional/alphanumeric.js', 'client');
  api.addFiles('additional/bankaccountNL.js', 'client');
  api.addFiles('additional/bankorgiroaccountNL.js', 'client');
  api.addFiles('additional/bic.js', 'client');
  api.addFiles('additional/cifES.js', 'client');
  api.addFiles('additional/creditcardtypes.js', 'client');
  api.addFiles('additional/currency.js', 'client');
  api.addFiles('additional/dateFA.js', 'client');
  api.addFiles('additional/dateITA.js', 'client');
  api.addFiles('additional/dateNL.js', 'client');
  api.addFiles('additional/extension.js', 'client');
  api.addFiles('additional/giroaccountNL.js', 'client');
  api.addFiles('additional/iban.js', 'client');
  api.addFiles('additional/integer.js', 'client');
  api.addFiles('additional/ipv4.js', 'client');
  api.addFiles('additional/ipv6.js', 'client');
  api.addFiles('additional/lettersonly.js', 'client');
  api.addFiles('additional/letterswithbasicpunc.js', 'client');
  api.addFiles('additional/mobileNL.js', 'client');
  api.addFiles('additional/mobileUK.js', 'client');
  api.addFiles('additional/nieES.js', 'client');
  api.addFiles('additional/nifES.js', 'client');
  api.addFiles('additional/nowhitespace.js', 'client');
  api.addFiles('additional/pattern.js', 'client');
  api.addFiles('additional/phoneNL.js', 'client');
  api.addFiles('additional/phoneUK.js', 'client');
  api.addFiles('additional/phoneUS.js', 'client');
  api.addFiles('additional/phonesUK.js', 'client');
  api.addFiles('additional/postalCodeCA.js', 'client');
  api.addFiles('additional/postalcodeIT.js', 'client');
  api.addFiles('additional/postalcodeNL.js', 'client');
  api.addFiles('additional/postcodeUK.js', 'client');
  api.addFiles('additional/require_from_group.js', 'client');
  api.addFiles('additional/skip_or_fill_minimum.js', 'client');
  api.addFiles('additional/statesUS.js', 'client');
  api.addFiles('additional/strippedminlength.js', 'client');
  api.addFiles('additional/time.js', 'client');
  api.addFiles('additional/time12h.js', 'client');
  api.addFiles('additional/url2.js', 'client');
  api.addFiles('additional/vinUS.js', 'client');
  api.addFiles('additional/zipcodeUS.js', 'client');
  api.addFiles('additional/ziprange.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jquery-validate');
  api.addFiles('jquery-validate-tests.js');
});
