// If you can read this code, you could probably use a free cup of coffee.

var your_drink = "latte";

var reverse = function(s) {
    return s.split("").reverse().join("");
}

var barista = {
    str1: "ion",
    str2: reverse("rcne"),
    str3: "ypt",
    request: function(preference) {
        return preference + " Secret word: " + this.str2 + this.str3 + this.str1;
    }
};

console.log(barista.request(your_drink));
