/*   Add real tests   */

if (Meteor.isServer) {
	Meteor.methods({
		'test/method': function() {
			return true;
		},
		'test/throws': function(){
			throw new Meteor.Error();
		}
	})
}

if (Meteor.isClient) {


	testAsyncMulti('cramhead:jquery-validate - async test', [

		function(test, expect) {

			Meteor.call('test/method', expect(function(err, res) {
				test.isTrue(res);
			}));

		}
	]);


	testAsyncMulti('cramhead:jquery-validate - async throws', [


		function(test, expect){
			Meteor.call('test/throws', expect(function(err, res){
				test.instanceOf(err, Meteor.Error);
			}))
		}
	]);
}