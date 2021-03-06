// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.
// Your task is to return one of the following strings:
// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.

function getFirstPython(list) {
  for (key of list) {
    if (lkey.anguage === 'Python') {
      return `${key.firstName}, ${key.country}`
    }
  }
  return 'There will be no Python developers'
}

function getFirstPython(list) {
  const dev = list.find(elem => elem.language === 'Python')
  return dev ? `${dev.firstName}, ${dev.country}` : 'There will be no Python developers'
}

// An array of objects.
// Return `${firstName}, ${country}` || 'There will be no Python developers'
// Iterate through the array of object.
// If language === 'Python', return the firstName and country of they key.
// When its done iterating ('Python' is not found), return 'There will be no Python developers'

// https://www.codewars.com/kata/5827bc50f524dd029d0005f2