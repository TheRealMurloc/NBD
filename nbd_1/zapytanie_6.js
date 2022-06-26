printjson(db.people.insert({ "sex" : "Male",
		"first_name" : "Patryk",
		"last_name" : "Skibiński-Kołtun",
		"job" : "IT systems maintenance specialist",
		"email" : "s17203@pjwstk.edu.pl",
		"location" : {
			"city" : "Warsaw",
			"address" : {
				"streetname" : "Bardzo ładna ulica",
				"streetnumber" : "100"
			}
		},
		"description" : "",
		"height" : "178",
		"weight" : "72.2",
		"birth_date" : "1997-04-27T23:51:38Z",
		"nationality" : "Poland",
		"credit" : [
			{
				"type" : "paypal",
				"number" : "3581609550731672",
				"currency" : "PLN",
				"balance" : "283298.11"
			}
		] }))
