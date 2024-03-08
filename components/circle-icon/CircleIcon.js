import PropTypes from "prop-types"

export default function CircleIcon({text}) {
    return (
        <div className="h-8 w-8 bg-teal-500 rounded-full flex items-center justify-center text-lg text-white font-bold">{text}</div>
    )
}

CircleIcon.propTypes = {
    text: PropTypes.string.isRequired
}