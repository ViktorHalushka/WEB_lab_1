document.addEventListener("DOMContentLoaded", function() {
    var logoContainer = document.getElementById("logo-container");
    var authorInfo = document.getElementById("author-info");
  
    logoContainer.addEventListener("click", function() {
      authorInfo.style.display = (authorInfo.style.display === "block") ? "none" : "block";
    });
  }); 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function findMaxDigit() {
  
    var number = parseInt(document.getElementById("numberInput").value);
    var outputElement = document.getElementById("output");
  
    if (isNaturalNumber(number)) {
      let maxDigit = getMaxDigit(number);
      let count = countdigit(number, maxDigit);    
      outputElement.innerText = `Найбільша цифра: ${maxDigit}, Зустрічається ${count} раз(и/ів).`;
    } else {
      outputElement.innerText = "Будь ласка, введіть натуральне число.";
    }
  }
  
  function isNaturalNumber(n) {
    return Number.isInteger(Number(n)) && Number(n) > 0;
  }
  
  function getMaxDigit(number) {
    let maxDigit = 0;
  
    while (number > 0) {
      let digit = number % 10;
      if (digit > maxDigit) {
        maxDigit = digit;
      }
      number = Math.floor(number / 10);
    }
  
    return maxDigit;
  }
  
  function countdigit(number, digit) {
    let count = 0;
  
    while (number > 0) {
      let currentDigit = number % 10;
      if (currentDigit === digit) {
        count++;
      }
      number = Math.floor(number / 10);
    }
  
    return count;
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function countreplay() {
  var inputText = document.getElementById('numberInput').value;
  var numbers = inputText.split(',').map(function(item) {
    return parseInt(item.trim());
  });

  var occurrences = {};

  numbers.forEach(function(number) {
    if (occurrences[number]) {
      occurrences[number]++;
    } else {
      occurrences[number] = 1;
    }
  });

  var resultHtml = '<h3>Результат:</h3>';
  for (var key in occurrences) {
    resultHtml += key + ': ' + occurrences[key] + ' раз(ів)<br>';
  }

  document.getElementById('result').innerHTML = resultHtml;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function countWords() {
  var inputText = document.getElementById('textInput').value;
  var words = splitWords(inputText);
  var wordCount = words.length;

  var resultHtml = '<h3>Кількість слів у тексті:</h3>';
  resultHtml += '<p>' + wordCount + '</p>';

  document.getElementById('result').innerHTML = resultHtml;
}

function splitWords(text) {
  // Видаляємо знаки пунктуації та розділяємо текст на слова
  var words = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(/\s+/);
  // Видаляємо порожні елементи, які можуть з'явитися після обробки пунктуації
  return words.filter(function(word) {
    return word.length > 0;
  });
}