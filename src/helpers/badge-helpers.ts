const colorTypes = [
    { type: 'Силовая', color: '#FADB14' },
    { type: 'Ноги', color: '#FF4D4F' },
    { type: 'Руки', color: '#13C2C2' },
    { type: 'Грудь', color: '#52C41A' },
    { type: 'Спина', color: '#FA8C16' },
    { type: 'Кардио', color: '#EB2F96' },
]

export const colorizeBadge = (trainingType: string): string => {
    const colorType = colorTypes.find(element => element.type === trainingType);
    return colorType?.color ?? '#FF4D4F';
}