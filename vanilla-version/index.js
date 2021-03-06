const data = [
  {
    "type": "case",
    "title": "9th Street",
    "id": "a0445e60-428b-44aa-a1a4-c7a750da9e8d"
  },
  {
    "type": "case",
    "title": "Central Perk Case",
    "id": "f673e7fe-e93f-47ad-9044-9c901455a436"
  },
  {
    "type": "phone_number",
    "title": "John Smith",
    "id": "470ec15f-2dac-417d-815b-52cd621d8437"
  },
  {
    "type": "phone_number",
    "title": "Jane Smith",
    "id": "f4cf5a20-0ef3-4a84-9bee-394f510e1629"
  },
  {
    "type": "case",
    "title": "Local PD",
    "id": "c9828623-f664-47b5-bdea-d6658f287fc5"
  },
    {
    "type": "case",
    "title": "Local TF",
    "id": "876490b5-b23b-4fbd-a9b8-e781406bf7b8"
  },
  {
    "type": "case",
    "title": "MCDA",
    "id": "b3d8a058-b980-4d92-841f-9994a346676d"
  },
  {
    "type": "case",
    "title": "DGTF",
    "id": "42036cb2-2689-4e02-b4bd-c23ca8da72fe"
  },
  {
    "type": "phone_number",
    "title": "Jim Smith",
    "id": "f5abd74d-1a6c-4d0d-a9db-fd516b8d964c"
  },
  {
    "type": "case",
    "title": "Main Street",
    "id": "f631759c-45c7-4ee5-be3a-f52ccee9a920"
  }
]

function repeatData(data) {
  for (var i = 0; i < data.length; i++) {
    let div = document.getElementsByClassName('list-item')
    let h3 = document.createElement('h3')
    let span = document.createElement('span')
    let div2 = document.createElement('div')
    let button = document.createElement('button')
    div[0].appendChild(h3)
    h3.classList.add("centered")
    div[0].appendChild(span)
    div[0].appendChild(button)
    h3.innerHTML = data[i].title
    span.innerHTML = data[i].type
    button.innerHTML = 'REMOVE'
  }
}

repeatData(data)
