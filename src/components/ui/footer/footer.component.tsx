// Components
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
// Styles
import { FooterStyledComponent, FooterTypographyStyledComponent } from "./footer.styled.component"
import { FooterLinksTypes } from './types/footer-links.component';

export const FooterComponent = () => {

  const links: FooterLinksTypes = {
    github: { url: 'https://github.com/eladioltb' },
    linkedin: { url: 'https://www.linkedin.com/in/eladio-loriente/' }
  }

  return (
    <FooterStyledComponent>
      <FooterTypographyStyledComponent fontVariant="monospace"> 
        Web designed and developed by Eladio Loriente
      </FooterTypographyStyledComponent> 
      <FooterTypographyStyledComponent>
        {
          (links.github) 
            ? <IconButton href={links.github.url} target="_blank">
                <GitHubIcon sx={{fill: 'var(--font-color)'}}/>
              </IconButton>
            : <></>
        }
        {
          (links.linkedin) 
            ? <IconButton href={links.linkedin.url} target="_blank">
                <LinkedInIcon sx={{fill: 'var(--font-color)'}}/>
              </IconButton>
            : <></>
        }
      </FooterTypographyStyledComponent>
    </FooterStyledComponent>
  )
}