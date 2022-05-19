import PropTypes from 'prop-types';

function SubTitle(props) {
    return(
        <>
         <h3 className={`
         ${props.colorClasser}
         ${props.isCentered? 'text-center': ''}`}>{props.subTitle}</h3>
         <div className={`${props.isCentered? 'ss-sep-01 bg-p mt-2 mb-3 ss-sep-center': ''}`}></div>
        </>
    );
}

SubTitle.defaultProps = {
    isCentered: false,
    colorClasser: 'color-s'
}
SubTitle.propTypes = {
    isCentered: PropTypes.bool,
    subTitle: PropTypes.string.isRequired,
    colorClasser: PropTypes.string
};

export default SubTitle;