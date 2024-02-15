import { useState } from "react"

function App() {

  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")

  function generate() {
    const characeters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 5 
    let newPassword = ""

    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characeters.length)
      newPassword += characeters[position]
    }

    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
    <div className="App">
        <h1>Gerador de senhas</h1>
        <button onClick={generate}>Gerar!</button>
        <button onClick={copyToClipboard}>{copyText}</button>
        <div>{password}</div>
    </div>
  )
}

export default App
 