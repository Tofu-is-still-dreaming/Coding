let memberArray = ['egoing', 'graphitte', 'leezhce']
console.log('memberArray[2]', memberArray[2])

let memberObject = {
  manager : 'egoing',
  developer : 'graphittie',
  designer : 'leezhce'
}
memberObject.designer = 'leezche'; // 값을 업데이트 하거나 추가하고 싶을때 이런식으로.
console.log("memberObject.developer", memberObject.developer)
console.log("memberObject['manager']", memberObject['manager'])
console.log("memberObject.designer", memberObject.designer)

delete memberObject.manager
console.log("memberObject.manager", memberObject.manager)

// 여기까지 객체 기본(두가지로 객체 설정, 추가or업뎃or삭제)