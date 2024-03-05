pipeline {
    agent {
        docker {
            image 'node:lts-alpine'
            args '-u root'
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}
