import React, { useEffect } from 'react';
import { MdMic, MdOutlinePermMedia } from 'react-icons/md';
import { useMobile } from '../../../../../hooks/useMobile';
import { Button } from '../../../../Widgets/Buttons/Button';
import { ContainerInput } from '../ContainerInput';
import { AlingInput } from '../ContainerInput/styles';
import { FakeInput } from '../FakeInput';
import { InputMsg } from '../InputMsg';
import { SectionInput } from './styles';

export const InputMessege = () => {
  const { isMobile } = useMobile();
 

  return (
    <>
      {!isMobile ? (
        <ContainerInput>
          <FakeInput>
            <SectionInput>
              <InputMsg />
            </SectionInput>
            <Button rounded full={false}>
              <MdMic />
            </Button>
          </FakeInput>

          <Button rounded full={false}>
            <MdOutlinePermMedia />
          </Button>
        </ContainerInput>
      ) : (
        <>
          <AlingInput>
            <ContainerInput>
              <FakeInput>
                <SectionInput>
                  <InputMsg />
                </SectionInput>
                <Button rounded full={false}>
                  <MdMic />
                </Button>
              </FakeInput>

              <Button rounded full={false}>
                <MdOutlinePermMedia />
              </Button>
            </ContainerInput>
          </AlingInput>
        </>
      )}
    </>
  );
};
