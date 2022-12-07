import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { MdUpload } from 'react-icons/md';
import { useModal } from '../../../context/ModalProvider/useModal';
import { Title } from '../../General/Title';
import { Input } from '../../Widgets/Input';
import { UploadSecondStep } from '../SecondStep';
import {
  Container,
  Content,
  ErrorSpan,
  FieldContainer,
  YellowButton,
  StyledInput
} from './styles';

interface IUploadThirdStepProps {
  type: 'music' | 'image';
  secondStepFiles: string[];
}

interface Inputs {
  title: string;
  description: string;
  explicit: boolean;
  categories: string[];
}

export function UploadThirdStep({
  type,
  secondStepFiles
}: IUploadThirdStepProps) {
  const [musicCover, setMusicCover] = useState<string[]>();
  const [files, setFiles] = useState<string[]>();

  const {
    getInputProps,
    getRootProps,
    acceptedFiles,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: {
      'image/png': [],
      'image/jpeg': [],
      'image/webp': []
    },
    multiple: false,
    onDrop: acceptedFiles => {
      setMusicCover(acceptedFiles.map(file => URL.createObjectURL(file)));
    }
  });

  const { handleCallModal } = useModal();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  function handleUploadSecondStep(files: string[]) {
    handleCallModal(<UploadSecondStep firstStepFiles={files} />, {
      center: true,
      overlay: true
    });
  }

  const onSubmit: SubmitHandler<Inputs> = async data => {
    return;
  };

  useEffect(() => {
    setFiles(secondStepFiles);
  }, []);

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldContainer>
            <Controller
              name="title"
              control={control}
              rules={{ required: 'Campo obrigatório' }}
              render={({ field }) => (
                <StyledInput type="text" title="Título" {...field} />
              )}
            />

            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
          </FieldContainer>
          <YellowButton type="submit">Enviar</YellowButton>
        </form>
      </Content>
    </Container>
  );
}
