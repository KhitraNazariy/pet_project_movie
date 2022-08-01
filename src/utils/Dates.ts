const addLeadingZero = (d: number) => {
    return (d < 10) ? '0' + d : d
}

const configureDateLastMonth = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = addLeadingZero(date.getMonth())
    const day = addLeadingZero(date.getDate())
    return `${year}-${month}-${day}`
}

const configurePresentDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = addLeadingZero(date.getMonth() + 1)
    const day = addLeadingZero(date.getDate())
    return `${year}-${month}-${day}`
}

export {addLeadingZero, configureDateLastMonth, configurePresentDate}