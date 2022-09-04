export const getLS = (DB: string) => JSON.parse(localStorage.getItem(DB) as string) ?? [];
export const setLS = (DBName: string, newDB: any) => localStorage.setItem(DBName, JSON.stringify(newDB));