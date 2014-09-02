var language = window.navigator.userLanguage || window.navigator.language;
language = language.trim().match(/^[a-z]{2}/)[0]
alert(language);
