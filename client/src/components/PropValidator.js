// Validates value using regex from props in string format (for example '^[\w./]+$')

export default function ValidatePropRegex(regex_prop, value) {
    return (regex_prop && value && RegExp(regex_prop).test(value)) || false;
}