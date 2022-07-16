// Check if data exists from sql server
// because null in sql return 'null'
export function checkDataExists(value) {
    return value !== 'null' ? value : '';
}
