const useTranslation = () => {
  const t = (key: string): string => {
    let translation: any = key

    return translation || `Missing translation: ${key}`
  }

  return { t }
}

export default useTranslation
