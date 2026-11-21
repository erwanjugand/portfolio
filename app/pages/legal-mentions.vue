<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useSeoMeta({
  title: t('pages.legalMentions.title'),
  description: t('pages.legalMentions.description'),
})

defineI18nRoute({
  paths: {
    en: '/legal-mentions',
    fr: '/mentions-legales',
  },
})
</script>

<template>
  <PSection>
    <div class="container legal-mentions">
      <PHeading tag="h1">
        {{ $t('pages.legalMentions.title') }}
      </PHeading>

      <div class="legal-mentions-content" lang="fr">
        <h2 class="legal-mentions-title">1. Présentation du site</h2>

        <p>
          Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’en parcourir les
          pages. En vous connectant sur ce site, vous acceptez sans réserve les présentes modalités. Aussi, conformément
          à l’article 6 de la loi n°&nbsp;2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, les
          responsables du présent site internet
          <a href="https://erwan-jugand.fr">https://erwan-jugand.fr</a> sont&nbsp;:
        </p>
        <p>Éditeur du site&nbsp;:</p>
        <p>
          Nom&nbsp;: Jugand<br />
          Prénom&nbsp;: Erwan<br />
          Email&nbsp;: erwan.jugand@gmail.com
        </p>
        <p>Hébergement&nbsp;:</p>
        <p>
          Hébergeur&nbsp;: Cloudflare, Inc.<br />
          101 Townsend St, San Francisco, CA 94107, États-Unis<br />
          Téléphone&nbsp;: +1 (650) 319-8930<br />
          Site web&nbsp;: <a href="https://www.cloudflare.com">https://www.cloudflare.com</a>
        </p>

        <h2 class="legal-mentions-title">2. Conditions d’utilisation</h2>

        <p>
          <strong>Erwan Jugand</strong> met en œuvre tous les moyens à sa disposition pour assurer une information
          fiable et une mise à jour fiable de ses sites internet. Toutefois, des erreurs ou omissions peuvent survenir.
          L’internaute devra donc s’assurer de l’exactitude des informations auprès d’Erwan Jugand, et signaler toute
          modification du site qu’il jugerait utile. Erwan Jugand n’est en aucun cas responsable de l’utilisation faite
          de ces informations, et de tout préjudice direct ou indirect pouvant en découler.
        </p>
        <p>
          <strong>Cookies&nbsp;:</strong> le site <a href="https://erwan-jugand.fr">https://erwan-jugand.fr</a> ne
          dépose aucun cookie. Seule votre préférence de thème est enregistrée dans le stockage local de votre
          navigateur. La mesure d’audience est réalisée avec Umami, de façon anonyme et sans cookie.
        </p>
        <p>
          <strong>Liens hypertextes&nbsp;:</strong> les sites internet d’Erwan Jugand peuvent offrir des liens vers
          d’autres sites internet ou d’autres ressources disponibles sur Internet. Erwan Jugand ne dispose d’aucun moyen
          pour contrôler les sites en connexion avec ses sites internet. Erwan Jugand ne répond pas de la disponibilité
          de tels sites et sources externes, ni ne la garantit. Sa responsabilité ne peut être engagée pour tout
          dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment
          des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments.
          Les risques liés à cette utilisation incombent pleinement à l’internaute, qui doit se conformer à leurs
          conditions d’utilisation.
        </p>
        <p>
          Les utilisateurs, les abonnés et les visiteurs des sites internet d’Erwan Jugand ne peuvent mettre en place un
          hyperlien en direction de ce site sans l’autorisation expresse et préalable d’Erwan Jugand.
        </p>
        <p>
          Dans l’hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien en direction d’un des
          sites internet d’Erwan Jugand, il lui appartiendra d’adresser un email à l’adresse indiquée sur le site afin
          de formuler sa demande de mise en place d’un hyperlien. Erwan Jugand se réserve le droit d’accepter ou de
          refuser un hyperlien sans avoir à justifier sa décision.
        </p>

        <h2 class="legal-mentions-title">3. Services fournis</h2>

        <p>
          L’ensemble des activités ainsi que ses informations sont présentés sur notre site
          <a href="https://erwan-jugand.fr">https://erwan-jugand.fr</a>.
        </p>
        <p>
          Erwan Jugand s’efforce de fournir sur le site https://erwan-jugand.fr des informations aussi précises que
          possible. Les renseignements figurant sur le site
          <a href="https://erwan-jugand.fr">https://erwan-jugand.fr</a> ne sont pas exhaustifs et les photos non
          contractuelles. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
          Par ailleurs, toutes les informations indiquées sur le site https://erwan-jugand.fr sont données à titre
          indicatif, et sont susceptibles de changer ou d’évoluer sans préavis.
        </p>

        <h2 class="legal-mentions-title">4. Limitations contractuelles sur les données</h2>

        <p>
          Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes
          périodes de l’année, mais peut toutefois contenir des inexactitudes ou des omissions. Si vous constatez une
          lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à
          l’adresse erwan.jugand@gmail.com, en décrivant le problème de la manière la plus précise possible (page posant
          problème, type d’ordinateur et de navigateur utilisé, …).
        </p>
        <p>
          Tout contenu téléchargé se fait aux risques et périls de l’utilisateur et sous sa seule responsabilité. En
          conséquence, Erwan Jugand ne saurait être tenu responsable d’un quelconque dommage subi par l’ordinateur de
          l’utilisateur ou d’une quelconque perte de données consécutive au téléchargement. De plus, l’utilisateur du
          site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un
          navigateur de dernière génération mis à jour.
        </p>
        <p>
          Les liens hypertextes mis en place dans le cadre du présent site internet en direction d’autres ressources
          présentes sur le réseau Internet ne sauraient engager la responsabilité d’Erwan Jugand.
        </p>

        <h2 class="legal-mentions-title">5. Propriété intellectuelle</h2>

        <p>
          Tout le contenu présent sur le site <a href="https://erwan-jugand.fr">https://erwan-jugand.fr</a>, incluant,
          de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi
          que leur mise en forme, est la propriété exclusive d’Erwan Jugand à l’exception des marques, logos ou contenus
          appartenant à d’autres sociétés partenaires ou auteurs.
        </p>
        <p>
          Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de
          ces différents éléments est strictement interdite sans l’accord exprès par écrit d’Erwan Jugand. Cette
          représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les
          articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction
          constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les
          propriétaires des contenus copiés pourraient intenter une action en justice à votre encontre.
        </p>

        <h2 class="legal-mentions-title">6. Litiges</h2>

        <p>
          Les présentes conditions du site <a href="https://erwan-jugand.fr">https://erwan-jugand.fr</a> sont régies par
          les lois françaises et toute contestation ou tout litige qui pourrait naître de l’interprétation ou de
          l’exécution de celles-ci sera de la compétence exclusive des tribunaux. La langue de référence, pour le
          règlement de contentieux éventuels, est le français.
        </p>

        <h2 class="legal-mentions-title">7. Données personnelles</h2>

        <p>
          De manière générale, vous n’êtes pas tenu de nous communiquer vos données personnelles lorsque vous visitez
          notre site internet <a href="https://erwan-jugand.fr">https://erwan-jugand.fr</a>.
        </p>
      </div>
    </div>
  </PSection>
</template>

<style lang="scss">
.legal-mentions {
  max-width: 720px;

  &-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
  }

  &-title {
    margin-top: var(--spacing-4);
    font-size: 1.5em;
    font-weight: var(--font-weight-bold);

    &:first-child {
      margin-top: 0;
    }
  }

  p {
    color: var(--c-ink-2);
  }

  strong {
    font-weight: var(--font-weight-semibold);
    color: var(--c-ink);
  }

  a {
    color: var(--c-accent-ink);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
}
</style>
