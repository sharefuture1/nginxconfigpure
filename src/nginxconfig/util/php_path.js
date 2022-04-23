

export default (domain, backup = false) => {
    const key = `php${backup ? 'Backup' : ''}Server`;
    if (domain.php[key].computed === 'custom') return domain.php[`${key}Custom`].computed;
    return (domain.php[key].computed[0] === '/' ? 'unix:' : '') + domain.php[key].computed;
};
