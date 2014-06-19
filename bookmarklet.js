(function() {
if (typeof testTheForm === 'undefined') {
	testTheForm = function (wEmptyFields) {
		var formValues, formElement;
		formValues = {
			'firstname': ["Mäxchen", "John", "Hans-Jürgen"],
			'lastname': ["Mustermännchen", "Doe", "Hans-Dampf"],
			'company': ["Überfirma mit Luft nach oben", "Hans-Meier-Huber AG & GmbH", "My Company & Co."],
			'street': ["Kleines Wäldchen Str.", "Main Street", "Avenue des Champs-Élysées", "Friedrich-von-Schiller Str"],
			'nr': ["1", "1a", "123 b"],
			'zip': ["12345", "99-112", "ab 1234"],
			'city': ["Hinterwald-Ende", "Lübeck", "San Francisco"],
			'phone': ["12345", "(+49)1234-56789", "0012872641"],
			'email': ["example@example.com", "example.hans-meiser+irgendwas@gmail.de", "thats-my-mail.address@somewhere.com"],
			'date': ["01.01.2020", "29.02.2014", "31.12.1900"],
			'message': ["Falsches Üben von Xylophonmusik quält jeden größeren Zwerg.", "The five boxing wizards jump quickly", "Dès Noël où un zéphyr haï me vêt de glaçons würmiens, je dîne d’exquis rôtis de bœuf au kir à l’aÿ d’âge mûr & cætera !"],
			'text': ["Lorem ipsum", "dolor sit amet", "Üben von Xylophonmusik quält", "Dès Noël où"]
		};
		if (wEmptyFields) {
			var key, obj;
			for (key in formValues) {
				formValues[key].push("");
			}
		}
		randomElement = function (arr) {
			return arr[Math.floor(Math.random() * arr.length)];
		};
		setRandomVal = function (field, arr) {
			field.val(randomElement(arr));
		};

		formElement = ($('#content, td.contentColumn').length ? $('#content, td.contentColumn').find('form') : $('form'));

		formElement.find('input:text:visible, textarea:visible, select:visible').each(function (i) {
			var field = $(this), fieldName = field.attr('name').toLowerCase(), selectLen;
			if (field[0].tagName.toLowerCase() === 'select') {
				field.val($(randomElement(field.find('option'))).val());
			} else {
				if (/firstname|forname|vorname/.test(fieldName)) {
					setRandomVal(field, formValues.firstname);
				} else if (/lastname|surname|nachname|name/.test(fieldName)) {
					setRandomVal(field, formValues.lastname);
				} else if (/mail/.test(fieldName)) {
					setRandomVal(field, formValues.email);
				} else if (/company|firma/.test(fieldName)) {
					setRandomVal(field, formValues.company);
				} else if (/street|strasse/.test(fieldName)) {
					setRandomVal(field, formValues.street);
				} else if (/nr|hausnummer|streetnumber/.test(fieldName)) {
					setRandomVal(field, formValues.nr);
				} else if (/zip|plz/.test(fieldName)) {
					setRandomVal(field, formValues.zip);
				} else if (/city|stadt|ort/.test(fieldName)) {
					setRandomVal(field, formValues.city);
				} else if (/phone|telefon|fax/.test(fieldName)) {
					setRandomVal(field, formValues.phone);
				} else if (/day|date|tag/.test(fieldName)) {
					setRandomVal(field, formValues.date);
				} else if (/message|msg|nachricht|frage/.test(fieldName)) {
					setRandomVal(field, formValues.message);
				} else {
					setRandomVal(field, formValues.text);
				}
			}
		});
	};
}
testTheForm();
})();