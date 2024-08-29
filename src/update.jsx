
function changeName(event) {
    const [name, setName] = useState('default')
    setName(event.target.value)
}