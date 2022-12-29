import Head from 'next/head'
import Image from 'next/image'

import { jsx } from '@emotion/react'
import tw from 'twin.macro'
import TextInput from '../components/forms/textinput/TextInput'
import Button from '../components/core/button/Button'
import Checkbox from '../components/forms/checkbox/Checkbox'

import { FcGoogle } from 'react-icons/fc'
import { SiNaver } from 'react-icons/si'
import { RiKakaoTalkFill } from 'react-icons/ri'
import FormControl from '../components/forms/formControl/FormControl'

export default function Login(){

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          tw="max-w-sm mx-auto"
          css={{

          }}
        >
          <div tw="w-full inline-flex justify-center items-center text-center mb-4">
            <span tw="text-3xl font-semibold">C</span>
            <span tw="text-3xl font-semibold text-[#E6CEA0]">OO</span>
            <span tw="text-3xl font-semibold">KIVEL</span>
          </div>
          <div tw="mb-4 text-center">
              SNS로 간편 로그인
          </div>
          <div tw="flex gap-4 justify-center mb-4">
            <button type="button" css={[tw`flex items-center p-3 bg-gray-50 justify-center border border-gray-300 rounded-full`]} >
              <span css={[tw`text-3xl`]}><FcGoogle/></span>
            </button>
            <button type="button" css={[tw`flex items-center p-3 bg-[#03C75A] justify-center border border-gray-300 rounded-full`]} >
              <span css={[tw`text-3xl invert`]}><SiNaver/></span>
            </button>
            <button type="button" css={[tw`flex items-center p-3 bg-[#FEE500] justify-center border border-gray-300 rounded-full`]} >
              <span css={[tw`text-3xl text-black`]}><RiKakaoTalkFill/></span>
            </button>
          </div>
          <div className="mb-4 text-center">
            이메일로 로그인
          </div>
          <form onSubmit={handleSubmit}>
            <div
              tw="mb-4"
            >
              <FormControl>
                <TextInput id="mem_email" label="이메일" placeholder="이메일"/>
              </FormControl>         
            </div>
            <div
              tw="mb-4"
            >
              <TextInput id="mem_pw" label="비밀번호" placeholder="비밀번호" />
            </div>
            <div tw="mb-4">
              <Checkbox size="sm" label="로그인 유지"/>
            </div>
            <div tw="mb-4">
              <Button className="w-full" type="button" size="lg" variant="solid" styled="rounded" color="primary" label="로그인"/>
            </div>
            <div tw="mb-4 text-center">
              비밀번호 찾기 | 회원가입
            </div>
          </form>
        </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}