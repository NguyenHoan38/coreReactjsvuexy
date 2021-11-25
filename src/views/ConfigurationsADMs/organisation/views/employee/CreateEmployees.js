// ** User List Component
import FormPermissions from '../../components/FormPermissions'

// ** Styles
import '@styles/react/apps/app-users.scss'

const CreatePermissions = () => {
  return (
    <div >
      <FormPermissions checkForm={'create'} />
    </div>
  )
}

export default CreatePermissions
