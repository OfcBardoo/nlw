//lembrar
// const -> dados fixos, não podem ser mudados
// let -> dados que podem ser mudados

// const user = {
//   name: 'Alan Alves Araújo', // conteudo text
//   phone: 33988786385, // conteudo number
//   accept: true // conteudo boolean
// }

// let  accept = true
// let user = {
//   name: 'Alan Alves Araújo',
//   phone: 33988786385
// }

// user.name = "Bardoo"

// alert(user.name)

// formas de escrita de uma variavel
// camelCase
// PascalCase
// snake_case
//end

// function showMeSomething() {
//   alert(links.instagran)
// }

const linksSocialMedia = {
  github: 'sirbardoo',
  codepen: 'sirbardoo',
  instagram: 'bardoo_oficial',
  telegram: 'bardoo_oficial',
  whatsapp: '5533988786385'
}

// showMeSomething()

function changeSocialMediaLinks() {
  // document.getElementById('userName').textContent = 'Alan Alves Araújo'
  // userName.textContent = "Alan Alves Araújo"

  for (let li of socialLinks.children) {
    // alert(li.getAttribute('class'))
    const social = li.getAttribute ('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    // alert(li.children[0].href)
  }
}

changeSocialMediaLinks()