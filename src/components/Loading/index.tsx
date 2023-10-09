import React from 'react'
import * as S from './styles'
// Component
const Loading: React.FC = () =>
    <S.Container>
        <S.Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <path fill="#ffffff" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50">
                <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1.6s" begin="0s" repeatCount="indefinite" />
            </path>
        </S.Svg>
    </S.Container>
export default Loading