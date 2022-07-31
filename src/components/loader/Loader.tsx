import React from 'react';
import cl from './loader.module.scss';

const Loader = () => {
	return (
		<div className={cl.loader}>
			<div className={cl.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>
	)
}

export default Loader;