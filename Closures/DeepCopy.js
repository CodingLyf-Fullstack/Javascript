const original = {
  name: "CodingLyf",
  address: {
    city: "Hyderabad"
  },
  skills: ["Java", "React"]
};

function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    newObj[key] = deepCopy(obj[key]);
  }

  return newObj;
}


const newObject = deepCopy(original);

newObject.name = "Developer"
newObject.skills.push('Spring')
console.log(original)
console.log(newObject)