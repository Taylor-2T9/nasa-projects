import * as S from './styles'

const Modal = ({ isOpen, close, title, content }) => {
    return isOpen ? (
        <S.Fade>
            <S.Modal>
                <S.Content>
                    <h2>{title}</h2>
                    {content}
                </S.Content>
                <S.Footer>
                    <S.CloseButton onClick={close}>Close</S.CloseButton>
                </S.Footer>
            </S.Modal>
        </S.Fade>
    ) : null
}

export default Modal