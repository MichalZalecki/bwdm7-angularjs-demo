describe('Factory: People', function () {

	var $httpBackend, people;

	beforeEach(function () {
		module('myDataProviders');

		inject(function (_$httpBackend_, _people_) {
			$httpBackend = _$httpBackend_;
			people       = _people_;

			$httpBackend
				.whenGET('http://www.filltext.com/?age=%7BnumberRange%7C10,+80%7D&company=%7Bbusiness%7D&email=%7Bemail%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&phone=%7Bphone%7D&rows=10')
				.respond(
					[
					    {
					        "age": 74,
					        "company": "Jantz Computing",
					        "email": "WHuseyin@egestas.io",
					        "firstName": "Xin",
					        "lastName": "Mcwethy",
					        "phone": "9119389725"
					    },
					    {
					        "age": 54,
					        "company": "Cicero Marketing",
					        "email": "YSherwood@curabitur.net",
					        "firstName": "Alina",
					        "lastName": "Shofstahl",
					        "phone": "3969008123"
					    },
					    {
					        "age": 73,
					        "company": "Bascoe Corporation",
					        "email": "NDifrancesco@tellus.net",
					        "firstName": "Kenyatta",
					        "lastName": "Bradley",
					        "phone": "3621275885"
					    },
					    {
					        "age": 80,
					        "company": "Tollund Corporation",
					        "email": "LLevin@at.io",
					        "firstName": "Jeannine",
					        "lastName": "Welch",
					        "phone": "5745542046"
					    },
					    {
					        "age": 32,
					        "company": "Noriega Computing",
					        "email": "RStafford@pulvinar.ly",
					        "firstName": "Carl",
					        "lastName": "Aviles",
					        "phone": "1238942272"
					    },
					    {
					        "age": 67,
					        "company": "Suzanne Global",
					        "email": "MCross@neque.ly",
					        "firstName": "Kellyann",
					        "lastName": "Hencmann",
					        "phone": "7712714017"
					    },
					    {
					        "age": 32,
					        "company": "Wong Foods",
					        "email": "JMonroe@consequat.com",
					        "firstName": "Ghassan",
					        "lastName": "Cooper",
					        "phone": "2914604041"
					    },
					    {
					        "age": 51,
					        "company": "Kinnear and Sons",
					        "email": "SHershfeld@lacus.net",
					        "firstName": "Darryl",
					        "lastName": "Dewolfe",
					        "phone": "7363209651"
					    },
					    {
					        "age": 61,
					        "company": "Kvasnak Computing",
					        "email": "NDiriwachter@et.net",
					        "firstName": "Adreta",
					        "lastName": "Sobczak",
					        "phone": "5083287332"
					    },
					    {
					        "age": 24,
					        "company": "Vidales Global",
					        "email": "GMixon@egestas.org",
					        "firstName": "Song",
					        "lastName": "Neese",
					        "phone": "9444525648"
					    }
					]
				);
			$httpBackend
				.whenGET('http://www.filltext.com/?age=%7BnumberRange%7C10,+80%7D&company=%7Bbusiness%7D&email=%7Bemail%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&phone=%7Bphone%7D&rows=20')
				.respond(
					[
					    {
					        "age": 78,
					        "company": "Hughesdkaiya Global",
					        "email": "DCrompton@sed.org",
					        "firstName": "Elizabeth",
					        "lastName": "Hostetler",
					        "phone": "8736939761"
					    },
					    {
					        "age": 67,
					        "company": "Amaral Industries",
					        "email": "PAbsalom@ac.net",
					        "firstName": "Dmitry",
					        "lastName": "Loya",
					        "phone": "7297755992"
					    },
					    {
					        "age": 48,
					        "company": "Usgiveaway Technologies",
					        "email": "LReddin@sagittis.org",
					        "firstName": "Furdella",
					        "lastName": "Nicholson",
					        "phone": "5130303432"
					    },
					    {
					        "age": 66,
					        "company": "Kailin Services",
					        "email": "DHerbert@magna.net",
					        "firstName": "Thelma",
					        "lastName": "Bario",
					        "phone": "1356786173"
					    },
					    {
					        "age": 69,
					        "company": "Grimsley Global",
					        "email": "JWard@sit.ly",
					        "firstName": "Roberto",
					        "lastName": "Azzarello",
					        "phone": "5696226968"
					    },
					    {
					        "age": 17,
					        "company": "Theiss Shipping",
					        "email": "ACovel@aliquam.io",
					        "firstName": "Lois",
					        "lastName": "Granger",
					        "phone": "6499201138"
					    },
					    {
					        "age": 28,
					        "company": "Schneider and Sons",
					        "email": "TCrantek@magna.org",
					        "firstName": "Gerard",
					        "lastName": "Brown",
					        "phone": "1929820257"
					    },
					    {
					        "age": 37,
					        "company": "Obermann Brothers",
					        "email": "KSalter@quis.org",
					        "firstName": "Marc",
					        "lastName": "Wassum",
					        "phone": "9128423979"
					    },
					    {
					        "age": 74,
					        "company": "Montemer Brothers",
					        "email": "KMcmenamin@aliquam.gov",
					        "firstName": "Roy",
					        "lastName": "Griebel",
					        "phone": "9353293483"
					    },
					    {
					        "age": 72,
					        "company": "Hawthorne Services",
					        "email": "GLooper@magna.org",
					        "firstName": "Marlissa",
					        "lastName": "Mcdermott",
					        "phone": "5776421011"
					    },
					    {
					        "age": 37,
					        "company": "Whitham Shipping",
					        "email": "DSaur@tortor.net",
					        "firstName": "Araceli",
					        "lastName": "Gray",
					        "phone": "5560293202"
					    },
					    {
					        "age": 67,
					        "company": "Johnson Marketing",
					        "email": "EDupont@lacus.net",
					        "firstName": "Janis",
					        "lastName": "Lamb",
					        "phone": "9760529013"
					    },
					    {
					        "age": 70,
					        "company": "Odonoghue Industries",
					        "email": "DLandosky@lacus.org",
					        "firstName": "LuAnn",
					        "lastName": "Looper",
					        "phone": "1135655849"
					    },
					    {
					        "age": 76,
					        "company": "Geddes Corporation",
					        "email": "PBechtold@facilisis.com",
					        "firstName": "Christel",
					        "lastName": "Santos",
					        "phone": "6138547008"
					    },
					    {
					        "age": 55,
					        "company": "Valkanet LLC",
					        "email": "SBatrouny@magna.io",
					        "firstName": "Jean",
					        "lastName": "Ferreira",
					        "phone": "9892361087"
					    },
					    {
					        "age": 51,
					        "company": "Dellabadia Services",
					        "email": "MRossi@velit.com",
					        "firstName": "Aubre",
					        "lastName": "Mauser",
					        "phone": "4282377220"
					    },
					    {
					        "age": 10,
					        "company": "Debord Brothers",
					        "email": "CBlunt@sed.com",
					        "firstName": "Fritz",
					        "lastName": "Brouillette",
					        "phone": "9122848174"
					    },
					    {
					        "age": 62,
					        "company": "Roth Global",
					        "email": "MDavid@porttitor.net",
					        "firstName": "Segun",
					        "lastName": "Scioscia",
					        "phone": "6287206467"
					    },
					    {
					        "age": 43,
					        "company": "Stair and Sons",
					        "email": "DCollins@nunc.org",
					        "firstName": "Terrence",
					        "lastName": "Costa",
					        "phone": "6769072799"
					    },
					    {
					        "age": 73,
					        "company": "Hurd Services",
					        "email": "VRobinson@suspendisse.org",
					        "firstName": "Amatullah",
					        "lastName": "Franklin",
					        "phone": "3226493484"
					    }
					]
				);
		});
	});

	it('getRecords() should return promice which is going to return 10 records be dafault',
		function () {
			people.getRecords().success(function (data) {
				expect(data).toEqual(jasmine.any(Array));
				expect(data.length).toBe(10);
			});
			$httpBackend.flush();
	});

	it('getRecords(20) should return promice which is going to return 20 records',
		function () {
			people.getRecords(20).success(function (data) {
				expect(data).toEqual(jasmine.any(Array));
				expect(data.length).toBe(20);
			});
			$httpBackend.flush();
	});
});