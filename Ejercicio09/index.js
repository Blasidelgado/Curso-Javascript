const logger = require("./logger");

function pow (num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") return num1**num2
    throw new Error()
};

try {
    const result = pow(3,"2")
    console.log(result);
}
catch (e){
    logger.error("Ambos valores deben ser números")
}
