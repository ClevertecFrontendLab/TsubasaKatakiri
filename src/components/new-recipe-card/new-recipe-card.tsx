import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Image,
    Tag,
    TagLabel,
    TagLeftIcon,
    Text,
} from '@chakra-ui/react';

interface Props {
    cardImage: string;
    name: string;
    description: string;
    categoryIcon: string;
    category: string;
    likes?: number;
    bookmarks?: number;
}

const NewRecipeCard = ({ cardImage, name, description, categoryIcon, category }: Props) => (
    <Card>
        <CardHeader>
            <Image src={cardImage} alt={name} />
        </CardHeader>
        <CardBody>
            <Heading as='h4'>{name}</Heading>
            <Text>{description}</Text>
        </CardBody>
        <CardFooter>
            <Tag>
                <TagLeftIcon>
                    <Image src={categoryIcon} alt='' />
                </TagLeftIcon>
                <TagLabel>{category}</TagLabel>
            </Tag>
        </CardFooter>
    </Card>
);

export default NewRecipeCard;
