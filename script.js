function calculate() {
    // Get the weight of 18-karat gold from the input
    const weightOf18KaratGold = parseFloat(document.getElementById('weight').value);
    // Get the selected unit
    const unit = document.getElementById('unit').value;

    // Check if the input is a valid number
    if (isNaN(weightOf18KaratGold)) {
      alert('Please enter a valid weight.');
      return;
    }

    // Convert the weight to grams if it is in kilograms
    const weightInGrams = unit === 'kilograms' ? weightOf18KaratGold * 1000 : weightOf18KaratGold;

    // Calculate the 24-karat Gold Weight using the given purities
    const pureGoldWeight = (weightInGrams * 0.7515) / 0.995;

    // Calculate the Alloy Weight
    const alloyWeight = weightInGrams - pureGoldWeight;

    // Display the results with the appropriate unit
    if (unit === 'kilograms') {
      document.getElementById('pureGoldWeight').value = (pureGoldWeight / 1000).toFixed(3) + ' kg';
      document.getElementById('alloyWeight').value = (alloyWeight / 1000).toFixed(3) + ' kg';
    } else {
      document.getElementById('pureGoldWeight').value = pureGoldWeight.toFixed(2) + ' grams';
      document.getElementById('alloyWeight').value = alloyWeight.toFixed(2) + ' grams';
    }
  }