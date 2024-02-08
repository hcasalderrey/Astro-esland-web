import catalan from './ca.json'; 
import spanish from './es.json';

const LANG = {
	CATALAN: 'ca', 
	SPANISH: 'es',
};

export const getI18N = (
    {currentLocale = 'es',}:
    {currentLocale: string | undefined;}
) => {
	if (currentLocale === LANG.CATALAN) return {...spanish, ...catalan}; 
	return spanish;
};
